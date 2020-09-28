
import mongoose, {Document, Schema} from 'mongoose'

export interface IList extends Document {
    titulo: string,
    done: boolean
}

const Task = new Schema({
    titulo: {
        type: String,
        required: true,
    },
    done: {
        type: Boolean,
        required: true,
        default: 0 // false
    }
}, {timestamps: true})

export default mongoose.model<IList>('TaskList', Task)