import re
import sys

filepath = 'c:/Users/dk290/OneDrive/Desktop/My Portfolio/portfolio/index.html'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

pattern = re.compile(r'(<section id="projects" class="section">.*?</section>\s*)<section id="architecture"', re.DOTALL)
match = pattern.search(content)

if not match:
    print("Could not find projects section")
    sys.exit(1)

new_projects_section = """<section id="projects" class="section">
        <h2 class="title scroll-reveal">Personal Projects</h2>
        <div class="projects-grid scroll-reveal">
            
            <div class="project-card">
                <div class="p-info">
                    <h3>Game Master Agent</h3>
                    <p>AI-powered gaming assistant that helps manage game logic, decision making, and automated gameplay interactions using intelligent agents.</p>
                    <ul class="p-bullets">
                        <li>automated game strategy logic</li>
                        <li>agent-based decision system</li>
                        <li>real-time interaction</li>
                        <li>modular game architecture</li>
                    </ul>
                    <div class="t-tags">
                        <span>Python</span><span>AI Agents</span><span>Machine Learning</span>
                    </div>
                    <div class="p-links">
                        <a href="https://github.com/Divyanshu-2907/Game-Master-Agent" target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/></svg> 
                            GitHub <span class="arrow">↗</span>
                        </a>
                    </div>
                </div>
            </div>

            <div class="project-card">
                <div class="p-info">
                    <h3>RaiseNest – Crowdfunding Platform</h3>
                    <p>A full-stack crowdfunding platform where users can create campaigns, raise funds, and track contributions.</p>
                    <ul class="p-bullets">
                        <li>campaign creation and management</li>
                        <li>secure contribution system</li>
                        <li>dashboard for tracking funds</li>
                        <li>responsive UI</li>
                    </ul>
                    <div class="t-tags">
                        <span>React</span><span>Node.js</span><span>MongoDB</span><span>Express</span>
                    </div>
                    <div class="p-links">
                        <a href="https://github.com/Divyanshu-2907/RaiseNest-CrowdFunding" target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/></svg> 
                            GitHub <span class="arrow">↗</span>
                        </a>
                    </div>
                </div>
            </div>

            <div class="project-card">
                <div class="p-info">
                    <h3>AI Mock Interview System</h3>
                    <p>AI-powered interview preparation platform that simulates real interview scenarios and evaluates responses.</p>
                    <ul class="p-bullets">
                        <li>AI-based interview evaluation</li>
                        <li>automated feedback system</li>
                        <li>scoring and performance analytics</li>
                        <li>real-time interaction</li>
                    </ul>
                    <div class="t-tags">
                        <span>Python</span><span>FastAPI</span><span>Machine Learning</span><span>React</span>
                    </div>
                    <div class="p-links">
                        <a href="https://github.com/Divyanshu-2907/AI_Mock_Interview" target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/></svg> 
                            GitHub <span class="arrow">↗</span>
                        </a>
                    </div>
                </div>
            </div>

            <div class="project-card">
                <div class="p-info">
                    <h3>Road Hazard Detection System</h3>
                    <p>AI-based computer vision system designed to detect road hazards such as potholes and obstacles to improve transportation safety.</p>
                    <ul class="p-bullets">
                        <li>object detection model</li>
                        <li>road safety monitoring</li>
                        <li>real-time hazard detection</li>
                        <li>data processing pipeline</li>
                    </ul>
                    <div class="t-tags">
                        <span>Python</span><span>OpenCV</span><span>Computer Vision</span><span>Deep Learning</span>
                    </div>
                    <div class="p-links">
                        <a href="https://github.com/Divyanshu-2907/Road_Hazard_Detection" target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/></svg> 
                            GitHub <span class="arrow">↗</span>
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
\n<section id="architecture" """

new_content = content[:match.start(1)] + new_projects_section + content[match.end(1):]
with open(filepath, 'w', encoding='utf-8') as f:
    f.write(new_content)
print("Finished updates to index.html")
