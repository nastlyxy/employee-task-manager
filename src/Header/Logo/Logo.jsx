export default function Logo({name, url, size=200}){
    return(
        <div>
            <img src={url} alt={name} height={size} />
        </div>
    );
}