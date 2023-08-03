import React from "react";
import "./GenerateInvonce.css";
import 'bootstrap/dist/css/bootstrap.css';

function GenerateInvoice() {
    // return (
    //    
    // )
    const [email, setEmail] = React.useState(" ");
    const [password, setPassword] = React.useState(" ");
    const [country, setCountry] = React.useState(" ");
    const [acceptedTerms, setAcceptedTerms] = React.useState(false);

    const handleSubmit = (event) => {
        console.log(`
      Email: ${email}
      Password: ${password}
      Country: ${country}
      Accepted Terms: ${acceptedTerms}
    `);

        event.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>

            <h1>Generate Invoice</h1>
            <div className="row">
            <div className="col-6 mt-3">
            <label>
                Name:
                </label>
                <input
                    name="name"
                    type="text"
                    className="name"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required />
            </div>
            <div className="col-6 mt-3">
            <label>
                Sender:
                </label>
                <input
                    name="sender"
                    type="text"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required />
            </div>
            <div className="col-6 mt-3">
            <label>
                receiver:
                </label>
                <input
                    name="Name"
                    type="text"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required />
            
            </div>
            {/* <div className="col-6 mt-3">
            <label>
                Style:
                </label>
                <input
                    name="style"
                    type=""
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required />
            
          </div> */}
          <div className="col-6 mt-3">
            <label>
                SAC CODE:
           </label>
                <select
                    name="country"
                    value={country}
                    onChange={e => setCountry(e.target.value)}

                    required>
                        <option value="18"> Food items (996337)</option>
                        <option value="18"> Electronics items (995461)</option>
                        <option value="12"> Cloths (998822) </option>
                </select>
                </div>
                <div className="col-6 mt-3">
                <label>
                Item Name:
                </label>
                <input
                    name="itemName"
                    type="text"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required />
            </div>
            <div className="col-6 mt-3">
            <label>
                Item Quantity:
                </label>
                <input
                    name="itemQuantity"
                    type="number"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required />
            </div>
            <div className="col-6 mt-3">
            <label>
                Item Price:
                </label>
                <input
                    name="itemPrice"
                    type="number"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required />
            </div>
            </div>

<button className="btn btn-primary mt-3">Submit</button>
        </form>
    );
}

export default GenerateInvoice;
