const randomInteger = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min

/* FOV: min 60, max 110, increment 1 */
export const fov = () => randomInteger(60, 110)

/* Distance: min 100, max 400, increment 10 */
export const distance = () => randomInteger(10, 40) * 10

/* Height: min 40, max 200, increment 10 */
export const height = () => randomInteger(4, 20) * 10

/* Angle: min -15, max 0, increment 1 */
export const angle = () => -randomInteger(0, 15)

/* Stiffness: min 0, max 1, increment 0.05 */
export const stiffness = () => (randomInteger(0, 20) * 5) / 100

/* Swivel: min 1, max 10, increment 0.1 */
export const swivel = () => randomInteger(1, 100) / 10

/* Transition: min 1, max 2, increment 0.1 */
export const transition = () => (randomInteger(10, 20) * 10) / 100

export const randomize = () => ({
  fov: fov(),
  distance: distance(),
  height: height(),
  angle: angle(),
  stiffness: stiffness(),
  swivel: swivel(),
  transition: transition(),
})
