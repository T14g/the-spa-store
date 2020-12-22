import React from 'react';

import './svg.styles.scss';

const SVG = ({name, onClickHandler = null}) => {

    switch(name){
        case 'plus':
            return (
                <div className="plus-box" onClick={onClickHandler}>
                    <svg className="plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
                </div>
            )
        case 'minus':
            return (
                <div className="minus-box" onClick={onClickHandler}>
                    <svg className="minus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 10h24v4h-24z"/></svg>
                </div>
            )
        
        case 'cart_bag': {
            return (
                <div className="bag-box">
                    <svg className="bag-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 201.387 201.387"><path d="M126.292 51.2h-51.2a3.414 3.414 0 01-3.413-3.413V29.013C71.678 13.015 84.693 0 100.692 0s29.013 13.015 29.013 29.013v18.773a3.414 3.414 0 01-3.413 3.414zm-47.787-6.827h44.373v-15.36c0-12.233-9.953-22.187-22.187-22.187S78.505 16.78 78.505 29.013v15.36z"/><path fill="#8c6b3b" d="M175.785 64.853H25.598l10.24-17.066h129.707z"/><path d="M175.785 68.267H25.598a3.412 3.412 0 01-2.97-1.732 3.412 3.412 0 01.043-3.439l10.24-17.067a3.409 3.409 0 012.927-1.657h129.707c1.2 0 2.311.628 2.927 1.657l10.24 17.067a3.414 3.414 0 01-2.927 5.171zM31.626 61.44h138.131l-6.144-10.24H37.772l-6.146 10.24z"/><path fill="#83d816" d="M147.141 83.259l-46.528-10.88 11.657-49.852 46.529 10.88z"/><path d="M147.144 86.688c-.258 0-.519-.029-.782-.09L99.831 75.715a3.412 3.412 0 01-2.546-4.101l11.662-49.853a3.407 3.407 0 014.101-2.546l46.531 10.883a3.412 3.412 0 012.546 4.101l-11.662 49.853a3.412 3.412 0 01-3.319 2.636zm-42.435-16.843l39.885 9.329 10.105-43.204-39.885-9.329-10.105 43.204z"/><path fill="#2a8ee6" d="M103.232 74.95L46.141 81.7l-7.232-61.17 57.092-6.75z"/><path d="M46.135 85.117a3.414 3.414 0 01-3.386-3.014L35.52 20.936a3.416 3.416 0 012.988-3.791l57.09-6.748a3.413 3.413 0 013.791 2.99l7.229 61.169a3.408 3.408 0 01-.71 2.514 3.409 3.409 0 01-2.278 1.277l-57.09 6.746a3.726 3.726 0 01-.405.024zm-3.436-61.592l6.429 54.388 50.311-5.944-6.429-54.39-50.311 5.946z"/><path fill="#ed5481" d="M133.323 94.053L78.33 107.276 64.413 49.402l54.993-13.224z"/><path d="M78.324 110.689a3.413 3.413 0 01-3.316-2.615L61.092 50.203a3.413 3.413 0 012.521-4.116L118.6 32.864a3.432 3.432 0 012.58.406 3.422 3.422 0 011.536 2.113l13.916 57.873a3.41 3.41 0 01-2.521 4.116l-54.987 13.222a3.337 3.337 0 01-.8.095zm-9.798-58.764l12.32 51.236 48.35-11.626-12.32-51.235-48.35 11.625z"/><path fill="#fbad4a" d="M182.612 197.973H18.772l6.826-133.12h150.187z"/><path d="M182.612 201.387H18.772c-.935 0-1.83-.384-2.475-1.062a3.423 3.423 0 01-.934-2.526l6.827-133.12a3.415 3.415 0 013.41-3.238h150.187a3.414 3.414 0 013.41 3.238l6.827 133.12a3.414 3.414 0 01-3.412 3.588zM22.364 194.56h156.655l-6.477-126.293H28.841L22.364 194.56z"/><circle cx="126.292" cy="85.333" r="6.827" fill="#8c6b3b"/><path d="M126.292 95.573c-5.647 0-10.24-4.593-10.24-10.24s4.593-10.24 10.24-10.24 10.24 4.593 10.24 10.24-4.593 10.24-10.24 10.24zm0-13.653c-1.882 0-3.413 1.531-3.413 3.413s1.531 3.413 3.413 3.413 3.413-1.531 3.413-3.413-1.531-3.413-3.413-3.413z"/><circle cx="75.092" cy="85.333" r="6.827" fill="#8c6b3b"/><path d="M75.092 95.573c-5.647 0-10.24-4.593-10.24-10.24s4.593-10.24 10.24-10.24 10.24 4.593 10.24 10.24-4.593 10.24-10.24 10.24zm0-13.653c-1.882 0-3.413 1.531-3.413 3.413s1.531 3.413 3.413 3.413 3.413-1.531 3.413-3.413-1.531-3.413-3.413-3.413z"/><path d="M100.692 136.533c-15.998 0-29.013-13.015-29.013-29.013V88.747a3.414 3.414 0 016.826 0v18.773c0 12.233 9.953 22.187 22.187 22.187s22.187-9.953 22.187-22.187V90.063a3.414 3.414 0 013.15-4.729h.263a3.414 3.414 0 013.413 3.413v18.773c0 15.998-13.015 29.013-29.013 29.013z"/></svg>
                </div>
            )
        }

        case 'checked' : {
            return (
                <div className="checked-box">
                    <svg className="checked-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 367.805 367.805"><path d="M183.903.001c101.566 0 183.902 82.336 183.902 183.902s-82.336 183.902-183.902 183.902S.001 285.469.001 183.903C-.288 82.625 81.579.29 182.856.001h1.047z" fill="#3bb54a"/><path fill="#d4e1f4" d="M285.78 133.225L155.168 263.837l-73.143-72.62 29.78-29.257 43.363 42.841 100.833-100.833z"/></svg>
                </div>
            )
        }
            
        default:
            break;
            
    }
}

export default SVG;