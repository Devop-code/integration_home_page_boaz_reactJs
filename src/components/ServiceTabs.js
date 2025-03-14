import { useState } from "react";

export default function ServiceTabs({ selectedService }) {
  const [activeTab, setActiveTab] = useState("description");
  const colors = ["#fa8714", "#007bff"]; // Alternance entre orange et bleu

  return (
    <div className="service-tabs">
      <div className="tabs d-flex justify-content-center gap-3 mb-4">
        {[
          { key: "description", label: "Description" },
          { key: "process", label: "Processus" },
          selectedService.details.pricing && { key: "pricing", label: "Tarification" },
          selectedService.details.testimonials && { key: "testimonials", label: "Témoignages" }
        ].filter(Boolean).map((tab, index) => (
          <button
            key={tab.key}
            className="btn text-white px-4 py-2 rounded-pill shadow-sm fw-bold"
            style={{
              backgroundColor: activeTab === tab.key ? colors[index % 2] : "#f1f1f1",
              color: activeTab === tab.key ? "white" : "black",
              border: "none",
              transition: "all 0.3s ease-in-out",
            }}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="tab-content p-4 bg-light rounded shadow">
        {activeTab === "description" && (
          <div>
            <h2 className="h4 mb-3" style={{ color: colors[0] }}>Description</h2>
            <p>{selectedService.details.description}</p>
          </div>
        )}

        {activeTab === "process" && (
          <div>
            <h2 className="h4 mb-3" style={{ color: colors[1] }}>Processus</h2>
            <div className="timeline">
              {selectedService.details.steps?.map((step, index) => (
                <div key={index} className="timeline-item mb-3 d-flex align-items-start">
                  <div className="mr-3 p-2 rounded-circle text-white d-flex align-items-center justify-content-center"
                    style={{ backgroundColor: colors[index % 2], width: "40px", height: "40px", fontWeight: "bold" }}>
                    {index + 1}
                  </div>
                  <div>
                    <h5 style={{ color: "#0d1a36" }}>{step}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "pricing" && selectedService.details.pricing && (
          <div>
            <h2 className="h4 mb-3" style={{ color: colors[0] }}>Tarification</h2>
            <div className="p-4 bg-white rounded shadow-sm">
              {Array.isArray(selectedService.details.pricing) ? (
                <ul className="list-unstyled">
                  {selectedService.details.pricing.map((priceOption, index) => (
                    <li key={index} className="mb-2">
                      <strong>{priceOption.option}:</strong> {priceOption.price}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="font-weight-bold">{selectedService.details.pricing}</p>
              )}
            </div>
          </div>
        )}

        {activeTab === "testimonials" && selectedService.details.testimonials && (
          <div>
            <h2 className="h4 mb-3" style={{ color: colors[1] }}>Témoignages</h2>
            <div className="row">
              {selectedService.details.testimonials.map((testimonial, index) => (
                <div key={index} className="col-md-6 mb-3">
                  <div className="card p-3 border-0 shadow-sm">
                    <div className="d-flex align-items-center mb-2">
                      <div className="rounded-circle text-white d-flex align-items-center justify-content-center mr-3"
                        style={{ backgroundColor: colors[index % 2], width: "50px", height: "50px", fontWeight: "bold" }}>
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h5 className="mb-0" style={{ color: colors[index % 2] }}>{testimonial.name}</h5>
                      </div>
                    </div>
                    <p className="font-italic">"{testimonial.feedback}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
