# Rover assets

Drop the photo/diagram files here with these exact names. Once they exist, the
`<Figure>` placeholders in `src/content/work/rover.mdx` and
`src/content/writing/the-rover-deep-dive.mdx` get wired to real `<Image>`s.

| filename             | source photo                                  | used in                                  |
| -------------------- | --------------------------------------------- | ---------------------------------------- |
| `rover-topdown.jpg`  | top-down clean shot of the rover (Image #4)   | case study hero                          |
| `dashboard-fix.jpg`  | dashboard with live GPS "Fix var" (Image #1)  | case study dashboard + blog GPS section  |
| `lab-bringup.jpg`    | lab scene, rover + laptop + team (Image #3)   | blog bring-up                            |
| `dashboard-camera.jpg` | dashboard + camera feed, "Fix yok" (Image #2) | (optional / spare)                     |
| `rover-held.jpg`     | rover held up, 3/4 angle (Image #5)           | (optional hardware detail)               |
| `tf-tree.png`        | ROS view_frames TF tree (Image #6)            | case study EKF section                   |

Format note: JPG for photos, PNG for the TF tree diagram. Astro optimizes them at
build, so original resolution is fine.
