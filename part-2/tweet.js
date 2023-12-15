const Tweet = (props) => {
const {user, username, dateOfTweet, msg}= props
return <p>
    <div>
    {user} {username} {dateOfTweet}
    </div>
    <h2>{msg}</h2>

</p>


}