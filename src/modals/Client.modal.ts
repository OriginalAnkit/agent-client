import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ClientScheam = new Schema({
    ClientId: { type: String, required: true, unique: true },
    Name: { type: String, required: true },
    Email: { type: String, required: true },
    PhoneNumber: { type: String, required: true },
    TotalBill: { type: Number, required: true },
    AgencyId: { type: String }
})

const ClientModal = mongoose.model("Client", ClientScheam);

export default ClientModal;