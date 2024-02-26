import { motion } from "framer-motion";

function Section() {
  return (
    <div className="section">
      <div className="arrow">
        <div className="right">
          <span
            style={{
              fontSize: "15px",
              display: "flex",
              alignItems: "center",
            }}
          >
            {" "}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z" />
            </svg>
            Client
          </span>
          <img
            src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="img"
            className="table-img"
          />
        </div>
        <div className="left">
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <motion.div
        className="table"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <table>
          <thead>
            <tr>
              <th>S.KG</th>
              <th>NAME</th>
              <th>TAGS</th>
              <th>FILTER</th>
              <th>PDF</th>
              <th>START</th>
              <th>PROGRESS</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            <motion.tr
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <td>1</td>
              <td>John Doe</td>
              <td>
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0"
                  y="0"
                  viewBox="0 0 256 256"
                  style={{ enableBackground: "new 0 0 256 256", fill: "#ed6e7a" }}
                  xmlSpace="preserve"
                >
                  <path d="M49.174 95.578a32.38 32.38 0 0 0-10.03 1.589l-12.068 7.118c-6.349 5.919-10.324 14.351-10.324 23.715 0 17.906 14.516 32.422 32.422 32.422S81.596 145.906 81.596 128 67.08 95.578 49.174 95.578z" />
                  <path
                    className="st0"
                    d="M49.174 94.077c-3.569 0-7.1.56-10.494 1.663a1.5 1.5 0 0 0 .928 2.854 30.864 30.864 0 0 1 9.566-1.517c17.051 0 30.922 13.872 30.922 30.923s-13.872 30.923-30.922 30.923c-17.051 0-30.922-13.872-30.922-30.923 0-8.541 3.589-16.784 9.847-22.617a1.5 1.5 0 0 0-2.046-2.195C19.189 109.586 15.252 118.63 15.252 128c0 18.705 15.217 33.923 33.922 33.923S83.096 146.705 83.096 128 67.879 94.077 49.174 94.077z"
                  />
                  <circle cx="101.725" cy="128" r="32.422" style={{ fill: "#d5dc57" }} />
                  <path
                    className="st0"
                    d="M101.725 94.078c-18.705 0-33.922 15.218-33.922 33.922s15.217 33.922 33.922 33.922 33.922-15.218 33.922-33.922-15.217-33.922-33.922-33.922zm0 64.844c-17.051 0-30.922-13.871-30.922-30.922s13.872-30.922 30.922-30.922 30.922 13.871 30.922 30.922-13.872 30.922-30.922 30.922z"
                  />
                  <circle transform="rotate(-80.781 154.278 127.998)" cx="154.275" cy="128" style={{ fill: "#8ac5dc" }} r="32.422" />
                  <path
                    className="st0"
                    d="M154.275 94.078c-18.705 0-33.922 15.218-33.922 33.922s15.217 33.922 33.922 33.922 33.922-15.218 33.922-33.922-15.216-33.922-33.922-33.922zm0 64.844c-17.051 0-30.922-13.871-30.922-30.922s13.872-30.922 30.922-30.922 30.922 13.871 30.922 30.922-13.871 30.922-30.922 30.922z"
                  />
                  <path d="M206.826 95.578c-15.469 0-28.399 10.837-31.635 25.33v14.184c3.236 14.494 16.166 25.33 31.635 25.33 17.906 0 32.422-14.516 32.422-32.422s-14.516-32.422-32.422-32.422z" style={{ fill: "#fce8cb" }} />
                  <path
                    className="st0"
                    d="M206.826 94.077c-15.75 0-29.67 11.146-33.099 26.504a1.5 1.5 0 0 0 2.928.654c3.125-13.998 15.814-24.158 30.171-24.158 17.051 0 30.922 13.872 30.922 30.923s-13.871 30.923-30.922 30.923c-14.357 0-27.046-10.16-30.171-24.158a1.5 1.5 0 0 0-2.928.654c3.428 15.357 17.348 26.504 33.099 26.504 18.705 0 33.922-15.218 33.922-33.923s-15.217-33.923-33.922-33.923z"
                  />
                  <path d="M206.828 97.08c-2.58 0-5.1.32-7.5.92 13.44 3.36 23.42 15.54 23.42 30s-9.98 26.64-23.42 30c2.4.6 4.92.92 7.5.92 17.05 0 30.92-13.87 30.92-30.92s-13.87-30.92-30.92-30.92z" style={{ fill: "#decaad" }} />
                </svg>
              </td>
              <td>
              
              
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  style={{ fill: "#1c1b1e", width: "35px" }}
                >
                  <path d="M11.292 16.706a1 1 0 0 0 1.416 0l3-3a1 1 0 0 0-1.414-1.414L13 13.586V4a1 1 0 0 0-2 0v9.586l-1.293-1.293a1 1 0 0 0-1.414 1.414zM17 19H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2z" />
                </svg>
              </td>
              <td>  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{ width: '35px'}}>
                  <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm4,11H13v3a1,1,0,0,1-2,0V13H8a1,1,0,0,1,0-2h3V8a1,1,0,0,1,2,0v3h3a1,1,0,0,1,0,2Z" />
                </svg>{" "}</td>
              <td>On way</td>
              <td>
                <svg
                  data-name="Layer 3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128 128"
                  style={{ width: "35px", fill: "red" }}
                >
                  <path d="M64 21.433A42.567 42.567 0 1 0 106.567 64 42.615 42.615 0 0 0 64 21.433zm0 80.912A38.345 38.345 0 1 1 102.345 64 38.389 38.389 0 0 1 64 102.345z" />
                  <path d="M79.459 48.3a2.11 2.11 0 0 0-2.985 0L64 60.778 51.523 48.3a2.111 2.111 0 1 0-2.985 2.985l12.476 12.478-12.473 12.474a2.111 2.111 0 1 0 2.985 2.985L64 66.748l12.474 12.474a2.111 2.111 0 0 0 2.985-2.985L66.984 63.763l12.475-12.477a2.11 2.11 0 0 0 0-2.986z" />
                </svg>
              </td>
            </motion.tr>
            <motion.tr
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <td>2</td>
              <td>Ashutosh</td>
              <td>
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0"
                  y="0"
                  viewBox="0 0 256 256"
                  style={{ enableBackground: "new 0 0 256 256", fill: "#ed6e7a" }}
                  xmlSpace="preserve"
                >
                  <path d="M49.174 95.578a32.38 32.38 0 0 0-10.03 1.589l-12.068 7.118c-6.349 5.919-10.324 14.351-10.324 23.715 0 17.906 14.516 32.422 32.422 32.422S81.596 145.906 81.596 128 67.08 95.578 49.174 95.578z" />
                  <path
                    className="st0"
                    d="M49.174 94.077c-3.569 0-7.1.56-10.494 1.663a1.5 1.5 0 0 0 .928 2.854 30.864 30.864 0 0 1 9.566-1.517c17.051 0 30.922 13.872 30.922 30.923s-13.872 30.923-30.922 30.923c-17.051 0-30.922-13.872-30.922-30.923 0-8.541 3.589-16.784 9.847-22.617a1.5 1.5 0 0 0-2.046-2.195C19.189 109.586 15.252 118.63 15.252 128c0 18.705 15.217 33.923 33.922 33.923S83.096 146.705 83.096 128 67.879 94.077 49.174 94.077z"
                  />
                  <circle cx="101.725" cy="128" r="32.422" style={{ fill: "#d5dc57" }} />
                  <path
                    className="st0"
                    d="M101.725 94.078c-18.705 0-33.922 15.218-33.922 33.922s15.217 33.922 33.922 33.922 33.922-15.218 33.922-33.922-15.217-33.922-33.922-33.922zm0 64.844c-17.051 0-30.922-13.871-30.922-30.922s13.872-30.922 30.922-30.922 30.922 13.871 30.922 30.922-13.872 30.922-30.922 30.922z"
                  />
                  <circle transform="rotate(-80.781 154.278 127.998)" cx="154.275" cy="128" style={{ fill: "#8ac5dc" }} r="32.422" />
                  <path
                    className="st0"
                    d="M154.275 94.078c-18.705 0-33.922 15.218-33.922 33.922s15.217 33.922 33.922 33.922 33.922-15.218 33.922-33.922-15.216-33.922-33.922-33.922zm0 64.844c-17.051 0-30.922-13.871-30.922-30.922s13.872-30.922 30.922-30.922 30.922 13.871 30.922 30.922-13.871 30.922-30.922 30.922z"
                  />
                  <path d="M206.826 95.578c-15.469 0-28.399 10.837-31.635 25.33v14.184c3.236 14.494 16.166 25.33 31.635 25.33 17.906 0 32.422-14.516 32.422-32.422s-14.516-32.422-32.422-32.422z" style={{ fill: "#fce8cb" }} />
                  <path
                    className="st0"
                    d="M206.826 94.077c-15.75 0-29.67 11.146-33.099 26.504a1.5 1.5 0 0 0 2.928.654c3.125-13.998 15.814-24.158 30.171-24.158 17.051 0 30.922 13.872 30.922 30.923s-13.871 30.923-30.922 30.923c-14.357 0-27.046-10.16-30.171-24.158a1.5 1.5 0 0 0-2.928.654c3.428 15.357 17.348 26.504 33.099 26.504 18.705 0 33.922-15.218 33.922-33.923s-15.217-33.923-33.922-33.923z"
                  />
                  <path d="M206.828 97.08c-2.58 0-5.1.32-7.5.92 13.44 3.36 23.42 15.54 23.42 30s-9.98 26.64-23.42 30c2.4.6 4.92.92 7.5.92 17.05 0 30.92-13.87 30.92-30.92s-13.87-30.92-30.92-30.92z" style={{ fill: "#decaad" }} />
                </svg>
              </td>
              <td>
              
              
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  style={{ fill: "#1c1b1e", width: "35px" }}
                >
                  <path d="M11.292 16.706a1 1 0 0 0 1.416 0l3-3a1 1 0 0 0-1.414-1.414L13 13.586V4a1 1 0 0 0-2 0v9.586l-1.293-1.293a1 1 0 0 0-1.414 1.414zM17 19H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2z" />
                </svg>
              </td>
              <td>  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{ width: '35px'}}>
                  <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm4,11H13v3a1,1,0,0,1-2,0V13H8a1,1,0,0,1,0-2h3V8a1,1,0,0,1,2,0v3h3a1,1,0,0,1,0,2Z" />
                </svg>{" "}</td>
              <td>Done!</td>
              <td>
                <svg
                  data-name="Layer 3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128 128"
                  style={{ width: "35px", fill: "red" }}
                >
                  <path d="M64 21.433A42.567 42.567 0 1 0 106.567 64 42.615 42.615 0 0 0 64 21.433zm0 80.912A38.345 38.345 0 1 1 102.345 64 38.389 38.389 0 0 1 64 102.345z" />
                  <path d="M79.459 48.3a2.11 2.11 0 0 0-2.985 0L64 60.778 51.523 48.3a2.111 2.111 0 1 0-2.985 2.985l12.476 12.478-12.473 12.474a2.111 2.111 0 1 0 2.985 2.985L64 66.748l12.474 12.474a2.111 2.111 0 0 0 2.985-2.985L66.984 63.763l12.475-12.477a2.11 2.11 0 0 0 0-2.986z" />
                </svg>
              </td>
            </motion.tr>
          </tbody>
        </table>
      </motion.div>
    </div>
  );
}

export default Section;
