import { Continuous1DTaskSpec } from "./tasks/continuous_1d"
import { ContinuousKeypointTaskSpec } from "./tasks/continuous_keypoint"
import { InstructionsTaskSpec } from "./tasks/instructions"
import { QuestionnaireTaskSpec } from "./tasks/questionnaire"
import { VideocallTaskSpec } from "./tasks/videocall"
import {ThreeImagesTaskSpec} from "./tasks/three_images"

type DistributiveOmit<T, K extends keyof T> = T extends unknown
    ? Omit<T, K>
    : never;

type DistributivePick<T, K extends keyof T> = T extends unknown
    ? Pick<T, K>
    : never;

/**
* @TJS-additionalProperties false
*/
export interface CommonTaskSpec {
    /**
     * Name of the task. It is displayed in covfee (eg. "Video 3")
     */
    name: string,
    /**
     * ID of the task. Used (if provided) only to name the download (results) files
     */
    id?: string
    /**
     * If true, this task must have a valid submission before the HIT can be submitted
     * @default True
     */
    required?: boolean
    /**
     * Task is marked as a prerrequisite
     * Prerrequisite tasks must be completed before the rests of the tasks in the HIT are revealed.
     * @default False
     */
    prerequisite?: boolean
    /**
     * If true, the task is shared among all instances of the HIT
     * Useful for group tasks requiring a single shared submission (symmetric)
     */
    shared?: boolean
    /**
     * Timing config
     */
    timer?: {
        /**
         * Max time (in seconds) the user may take to complete the task
         * @default 0
         */
        maxTime: number
    }
    /**
     * Maximum number of submissions a user can make for the task.
     * @default 0
     */
    maxSubmissions?: number
    /**
     * Tasks will be submitted automatically when the media or timer ends.
     * @default false
     */
    autoSubmit?: boolean
    /**
     * children tasks
     */
    children?: Array<ChildTaskSpec>
    /**
     * Instructions to be displayed before the form
     */
    instructions?: string
    /**
     * How the instructions will be displayed
     * @default 'default'
     */
    instructionsType?: 'default' | 'popped'
}

/**
* @TJS-additionalProperties false
*/
export interface CommonContinuousTaskSpec extends CommonTaskSpec { }

/**
 * One of the supported task specs
 */
export type ChildTaskSpec = DistributiveOmit<TaskSpec, 'media' | 'children'>
export type TaskSpec =  Continuous1DTaskSpec | ContinuousKeypointTaskSpec | InstructionsTaskSpec | QuestionnaireTaskSpec

export interface TaskResponse {
    id: number,
    url: string,
    task_id: number,
    hitinstance_id: string,
    index: number,
    submitted: boolean,
    data: object,
    hasChunkData: boolean,
    chunkData?: object,
    state: any
}
export interface TaskType extends Omit<CommonTaskSpec, 'children'> {
    children: Array<TaskType>
    /**
     * Unique ID of the task
     */
    id: string
    /**
     * URL to task api endpoint
     */
    url: string
    /**
     * Task specification as provided by the user
     */
    spec: TaskSpec
    /**
     * number of times the task has been submitted
     */
    num_submissions: number
    /**
     * Sent when the latest response to the task is unsubmitted (used for resuming)
     */
    has_unsubmitted_responses: boolean
    /**
     * True if the task is a user task (can be edited)
     */
    editable: boolean
    /**
     * True if the task has been successfully validated
     */
    valid: boolean
    /**
     * Task-specific props to be fed to the task
     */
    taskSpecific?: any
}

export interface EditableTaskFields {
    /**
     * Display name of the task
     */
    name: string,
    /**
     * Task specification as provided by the user
     */
    // spec: any,
}


