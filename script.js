const shooter = {}

/**
 *  Set up
 */

shooter.$container = document.querySelector('.shooter')
shooter.$targets = shooter.$container.querySelector('.targets')
shooter.$timer = shooter.$container.querySelector('.timer')
shooter.$score = shooter.$container.querySelector('.score .value')

/**
 * Method
 */

shooter.addTarget = () => {
    const $target = document.createElement('div')
    $target.classList.add('target')
    shooter.$targets.appendChild($target)
}

shooter.addTarget()