
function Article({title, date="January 1, 1970", preview, minutes}) {

    let emoji=''
    let current=minutes;

    if(current > 30) {
        for (let i = Math.ceil(current/10); i > 0; i--) {
            emoji = emoji + '🍱'
        }
    } else {
        for(let i = Math.ceil(current/5); i > 0; i--) {
            emoji = emoji + "☕️"
        }
    }      

    return (
        <article>
            <h3>{title}</h3>
            <small>{date}•{emoji}{minutes} minute read</small>
            <p>{preview}</p>
        </article>
    )

}

export default Article;
