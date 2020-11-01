import * as React from 'react'
import CovfeeTasks from './tasks'
import CustomTasks from 'CustomTasks'
import { Button, Input, Modal, Select, Form } from 'antd'
const { Option } = Select

class NewTaskModal extends React.Component {

    state = {
        loading: false,
        task: null
    }

    constructor(props) {
        super(props)
    }

    componentDidUpdate(prevProps: Props) {
        if(this.props.visible == prevProps.visible) return

        // re-initialize the state when the component is shown
        if (!this.props.visible) return

        if (!this.props.new) {
            this.setState({
                task: {
                    preset: null,
                    ...this.props.task
                }
            })
        } else {
            this.setState({
                task: {
                    preset: Object.keys(this.props.presets)[0],
                    type: Object.values(this.props.presets)[0].type,
                    name: ''
                }
            })
        }
    }

    handleSubmit = () => {
        const task = { ...this.state.task}
        delete task.preset
        this.props.onSubmit(task).then(()=>{
            this.props.onCancel()
        })
    }

    handleChange = (task) => {
        this.setState({
            task: {
                ...this.state.task,
                ...task
            }
        })
    }

    render() {
        return <Modal
            visible={this.props.visible}
            title="Create new task"
            onOk={this.handleSubmit}
            onCancel={this.props.onCancel}
            footer={[
                <Button key="back" onClick={this.props.onCancel}>
                    Cancel
                </Button>,
                <Button key="submit" type="primary" loading={this.state.loading} onClick={this.handleSubmit}>
                    Submit
                </Button>
            ]}>
            <NewTaskForm 
                {...this.props} 
                task={this.state.task} 
                onChange={this.handleChange} />
        </Modal>
    }
}


class NewTaskForm extends React.Component {

    handlePresetChange = (value: String) => {
        this.props.onChange({preset: value})
    }

    handleTypeChange = (value: string) => {
        this.props.onChange({type: value})
    }

    handleNameChange = (e: Event) => {
        this.props.onChange({name: e.target.value})
    }

    render() {
        let presetSelect = <></>
        let typeSelect = <></>
        if(this.props.new) {
            presetSelect = <Form.Item label="Preset">
                <Select value={this.props.task.preset} style={{ width: 120 }} onChange={this.handlePresetChange} >
                    {Object.entries(this.props.presets).map(([key, value], i) => {
                        return <Option key={key} value={key}>{key}</Option>
                    })}
                </Select>
            </Form.Item>
        }


        typeSelect = <Form.Item label="Type">
            <Select value={this.props.task.type} style={{ width: 120 }} onChange={this.handleTypeChange} disabled>
                <Option key={0} value={this.props.task.type}>{this.props.task.type}</Option>
            </Select>
        </Form.Item>

        return <>
            {presetSelect}

            {typeSelect}

            <Form.Item label="Name">
                <Input value={this.props.task.name} onChange={this.handleNameChange} />
            </Form.Item>
        </>
    }
}

const getTaskClass = (type: string) => {
    if (type in CovfeeTasks) {
        const taskClass = CovfeeTasks[type]
        return taskClass
    } else if (type in CustomTasks) {
        const taskClass = CustomTasks[type]
        return taskClass
    } else {
        return null
    }
}

export { 
    getTaskClass, 
    NewTaskModal, 
    NewTaskForm
}