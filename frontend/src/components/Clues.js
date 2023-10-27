
function Clue(props) {
    return (
        <div className="border border-slate-700 rounded-xl px-2 w-80 h-16 flex gap-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 192 512"><path d="M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z"/></svg>
            <div className="text-sm font-mono">
                {props.clue}
            </div>
        </div>
    )
}

function Clues() {
    return (
        <div>
            <Clue clue="The object is near a lake. go find it before everyone will die." />
        </div>
    )
}

export default Clues