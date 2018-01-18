function addEvent(elem, eventName, handler) {
    if (elem.attachEvent) {
        elem.attachEvent("on", eventName, function () {
            handler.call(elem)

        })
    } else if (elem.addEventListener) {
        elem.addEventListener(eventName, handler, false)
    }

}

function removeEvent(elem, eventName, handler) {
    if (elem.detachEvent) {
        elem.detachEvent("on", eventName, function () {
            handler.call(elem)
        })
    } else if (elem.removeEventListener) {
        elem.removeEventListener(eventName, handler, false)

    }

}