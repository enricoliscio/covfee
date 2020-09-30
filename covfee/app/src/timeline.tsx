import * as React from 'react';
import { withRouter } from 'react-router'
import {
    LoadingOutlined,
} from '@ant-design/icons';
import {
    Row,
    Col,
    Typography,
    Space,
} from 'antd';
import 'antd/dist/antd.css'
const { Text, Title, Link } = Typography;

import * as Tasks from './tasks'
import * as CustomTasks from 'CustomTasks'
const Constants = require('./constants.json')

class Timeline extends React.Component {
    state = {
        status: 'loading',
        curr_task: 0,
        error: false,
        completion_code: false
    }
    timeline: object
    id: number
    url: string

    componentDidMount() {
        this.id = this.props.match.params.timelineId
        this.url = Constants.api_url + '/timelines/' + this.id

        fetch(this.url)
            .then(res => res.json())
            .then(
                (timeline) => {
                    this.timeline = timeline;
                    if(timeline.submitted) {
                        this.setState({
                            status: 'finished',
                            completion_code: timeline.completion_code
                        })
                    } else {
                        // convert tasks dict to array
                        var tasks = Object.keys(timeline.tasks).map(function (key) {
                            return timeline.tasks[key]
                        })
                        timeline.tasks = tasks
                        let new_idx = 0
                        timeline.tasks.forEach((el, idx) => {
                            if (el.numSubmissions > 0) {
                                new_idx = idx + 1
                            }
                        })

                        this.setState({
                            status: 'tasks',
                            curr_task: new_idx
                        })
                    }
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        status: 'error',
                        error
                    });
                }
            )
    }

    handleTaskSubmit() {
        // if done with tasks
        if(this.state.curr_task == this.timeline.tasks.length-1) {
            this.setState({
                status: 'sending'
            })
            // submit timeline to get completion code
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({'success': true})
            }
            fetch(this.url + '/submit', requestOptions)
                .then(async response => {
                    const data = await response.json()

                    // check for error response
                    if (!response.ok) {
                        // get error message from body or default to response status
                        const error = (data && data.message) || response.status
                        return Promise.reject(error)
                    }

                    // success
                    this.setState({
                        status: 'finished',
                        completion_code: data.completion_code,
                        error: false
                    })
                })
                .catch(error => {
                    this.setState({
                        status: 'finished',
                        error: error.toString()
                    })
                })
        } else {
            // go to next task
            this.setState({
                status: 'tasks',
                curr_task: this.state.curr_task + 1
            })
        }
    }

    render() {
        switch(this.state.status) {
            case 'loading':
                return <div className={'site-layout-content'}>
                        <LoadingOutlined />
                    </div>

            case 'tasks':
                const props = this.timeline.tasks[this.state.curr_task]
                props.url = this.url + '/tasks/' + props.id
                props.submit_url = props.url + '/submit'

                if (Tasks.hasOwnProperty(props.type)) {
                    const taskClass = Tasks[props.type]
                    return React.createElement(taskClass, {
                        key: this.state.curr_task,
                        onSubmit: this.handleTaskSubmit.bind(this),
                        ...props }, null)
                } else if (CustomTasks.hasOwnProperty(props.type)) {
                    const taskClass = CustomTasks[props.type]
                    return React.createElement(taskClass, {
                        key: this.state.curr_task,
                        onSubmit: this.handleTaskSubmit.bind(this),
                        ...props
                    }, null)
                } else {
                    return <Text>Error loading annotation task</Text>
                }

            case 'sending':
                return <div className={'site-layout-content'}>
                        <LoadingOutlined />
                    </div>

            case 'finished':
                if(this.state.error) {
                    return <>
                        <div className={'site-layout-content'}>
                            <Row gutter={16}>
                                <Col span={24}>
                                    <Space direction="vertical">
                                        <Title level={2}>Oops!</Title>
                                        <Text>Something went wrong when sending the task to the server.
                                            Please try again in a few minutes.
                                            If the issue persists please email 
                                            <a href={'mailto:' + this.timeline.project.email}> {this.timeline.project.email}</a>
                                        </Text>
                                    </Space>
                                </Col>
                            </Row>
                        </div>
                    </>
                } else {
                    let code = ''
                    if(this.state.completion_code) {
                        code = <>
                            <Text>Your completion code: </Text>
                            <Text code>{this.state.completion_code}</Text>
                        </>
                    }
                    return <>
                        <div className={'site-layout-content'}>
                            <Row gutter={16}>
                                <Col span={24}>
                                    <Title level={2}>Thank you!</Title>
                                    {code}
                                </Col>
                            </Row>
                        </div>
                    </>
                }
            default:
                return

        }
    }
}

const TimelineWithRouter = withRouter(Timeline);

export { TimelineWithRouter }