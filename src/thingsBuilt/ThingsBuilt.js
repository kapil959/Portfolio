import react, { useState, useEffect } from "react";
import { IconButton, Container, Button } from "@mui/material";
import { useAppSelector, getUsersData } from "../store";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import "./thingsBuilt.scss";
const ThingsBuilt = () => {
  const { projects } = useAppSelector(getUsersData);
  const [desc, setDesc] = useState([]);
  const dataDesc = (idx) => {
    return projects[idx].description.split("/").map((desc) => <li>{desc}</li>);
  };
  const urls = () => {
    return;
  };
  return (
    <section id="projects" className="projects">
      <Container id="containerClass" maxWidth="xl" className="customCssBox">
        <header>
          <h1>Some Things I’ve Built</h1>
        </header>
        {projects.map((project, idx) => {
          return (
            <div class="project-container">
              <div class="project">
                <div class="project-content">
                  <div class="project-label">Featured Project</div>
                  <h4 class="project-title">{project.displayName}</h4>
                  <div class="project-details">
                    <p>{dataDesc(idx)}</p>
                    <ul>
                      <li className="github">
                        <a href={project.githubUrl} target="_blank">
                          <GitHubIcon />
                        </a>
                      </li>
                      {project.url ? (
                        <li className="projectURL">
                          <a href={project.url} target="_blank">
                            <OpenInNewIcon />
                          </a>
                        </li>
                      ) : null}
                    </ul>
                  </div>
                </div>

                {project.images.length > 0 ? (
                  <div class="project-img">
                    <img
                      src={project.images[0]?.resolutions.desktop.url}
                      alt=""
                    />
                  </div>
                ) : null}
              </div>
            </div>
            // </div>
          );
        })}
      </Container>
    </section>
  );
};
export default ThingsBuilt;
