<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Upload File</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col">
                <form action="/upload.php" method="POST" enctype="multipart/form-data" id="upload">
                    <div class="form-group">
                        <label for="fileupload">File : </label>
                        <input type="file" id="fileupload" name="file" class="form-control-file">
                    </div>
                    <button class="btn btn-danger">submit</button>
                </form>
                <div class="mt-4 d-none" id="progress">
                    <div class="progress">
                        <div class="progress-bar" style="width: 0%">0%</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

    <script>
        const form = document.querySelector('#upload');
        const progress = document.getElementById('progress');
        const progressBar = progress.querySelector('.progress-bar');

        form.addEventListener('submit' , function(event) {
            event.preventDefault();
            
            let file = this.querySelector(`#fileupload`).files[0]
            if(file) {
                progress.classList.remove('d-none');

                let formdata = new FormData();
                formdata.append('file' ,file);
                axios.post("./upload.php",formdata,{
                    onUploadProgress:progressHandler
                }).then(respones=>{
                    console.log(respones)
                })
                .catch(err=>console.log(err))
                // let ajax = new XMLHttpRequest();
                // ajax.upload.addEventListener('progress' , progressHandler)
             
                // ajax.addEventListener('load' , completeHandler)

                // ajax.open('POST' , '/upload.php');
                // ajax.send(formdata)
            }
        })

        function progressHandler(event) {
            let percent = Math.round(( event.loaded / event.total ) * 100);
            progressBar.style.width = `${percent}%`
            progressBar.innerHTML = `${percent}%`
        }

        // function completeHandler() {
        //     console.log('complete')
        // }

    </script>
</body>
</html>