import { FaGithub, FaTwitter } from "react-icons/fa";

export function UI() {
  return (
    <>
      <div className="ui-container">
        <div>
          <h1>WEB</h1>
          <h1>GPU</h1>
        </div>
      </div>
      <div className="copy">
        <span>
          <a target="_blank" href="https://twitter.com/CantBeFaraz">
            <FaTwitter size={40} />
          </a>
        </span>

        <span>
          GLB rendered with WebGPU inside react-three-fiber <br /> Made with 🧡
          by{" "}
          <a target="_blank" href="https://twitter.com/CantBeFaraz">
            Faraz Shaikh
          </a>
        </span>

        <span>
          <a target="_blank" href="https://github.com/FarazzShaikh">
            <FaGithub size={40} />
          </a>
        </span>
      </div>
    </>
  );
}
