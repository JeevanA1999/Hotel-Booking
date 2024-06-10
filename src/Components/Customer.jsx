import React from 'react'
import customer1 from "../assets/img/customer-1.jpeg"
import customer2 from "../assets/img/customer-2.jpeg"

function Customer() {
  return (
    <section className="customers">
      <div className="common-header">
        <h1 className="common-heading">Our Customers</h1>
        <div className="underline">
          <div className="small-underline" />
          <div className="big-underline" />
        </div>
      </div>
      <p className="customers-paragraph">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas omnis
        laborum enim beatae corporis eveniet ratione, necessitatibus architecto
        iusto sapiente.
      </p>
      <div className="customers-card-wrapper">
        <div className="customer-card">
          <div className="customer-image-wrapper">
            <img src={customer1} alt="" className="customer-image" />
          </div>
          <div className="customer-info">
            <h3 className="customer-full-name">Scarlett Witch</h3>
            <p className="customer-paragraph-1">Happy Customer</p>
            <p className="customer-paragraph-2">
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
              voluptates natus sequi animi saepe dignissimos iste, recusandae
              dolorem provident? Ratione excepturi, exercitationem voluptatum
              assumenda laudantium a necessitatibus distinctio tempora amet?"
            </p>
          </div>
        </div>
        <div className="customer-card">
          <div className="customer-image-wrapper">
            <img src={customer2} alt="" className="customer-image" />
          </div>
          <div className="customer-info">
            <h3 className="customer-full-name">Black Canary</h3>
            <p className="customer-paragraph-1">Happy Customer</p>
            <p className="customer-paragraph-2">
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
              voluptates natus sequi animi saepe dignissimos iste, recusandae
              dolorem provident? Ratione excepturi, exercitationem voluptatum
              assumenda laudantium a necessitatibus distinctio tempora amet?"
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Customer
