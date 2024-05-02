/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */


// grid

const gridContainer = document.querySelector('.grid')
    
gridContainer.addEventListener('mouseenter', () => {
    gridContainer.style.outline = '1px solid red'
})

gridContainer.addEventListener('mouseleave', () => {
    gridContainer.style.outline = 'none'
})



// random hexcode 
const randomColor = () => {
    let hexColor = Math.floor(Math.random() * 16777215).toString(16);
    console.log(hexColor,'?')
    return hexColor;
  };
  

// cell 
const cells = document.querySelectorAll('.cell')

cells.forEach((cell) => { 
    cell.addEventListener('mouseenter', () => { 
        cell.style.outline ='1px solid red'
    })
    cell.addEventListener('mouseleave', () => { 
        cell.style.outline ='none'
    })

    cell.addEventListener('click', () => { 
        if (cell.style.backgroundColor) { 
            cell.style.backgroundColor =''
        }else { 
            cell.style.backgroundColor = `#${randomColor()}`
        }
    })
})

// key 
const page = document.querySelector('body') 
page.addEventListener('keydown', (e) => { 
    if (e.key === 'd') { 
       page.style.backgroundColor ='black'
    } else { 
        page.style.backgroundColor =''
    }
})