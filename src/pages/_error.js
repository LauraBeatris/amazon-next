export default function ErrorPage({statusCode}){ 
    return ( 
        <p>
            {statusCode ? `An error ${statusCode} occured on the server` : `An error ocurred on client`}
        </p>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}
  