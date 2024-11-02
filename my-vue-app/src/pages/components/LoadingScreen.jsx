const LoadingScreen = () => {
  return (
    <div className="position-absolute top-50 start-50 translate-middle gap-4 d-flex align-items-center">
        <h1> Loading </h1>
        <div className="spinner-border text-info"></div>
    </div>
  )
}

export default LoadingScreen