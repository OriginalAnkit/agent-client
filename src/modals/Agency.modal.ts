import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

const AgencySchema = new Schema({
    AgencyId: { type: String, required: true, unique: true },
    Name: { type: String, required: true },
    PhoneNumber: { type: String, required: true },
    State: { type: String, required: true },
    City: { type: String, required: true },
    Address1: { type: String, required: true },
    Address2: { type: String, required: false }
})

const AgencyModal = mongoose.model("Agency", AgencySchema);

export default AgencyModal;