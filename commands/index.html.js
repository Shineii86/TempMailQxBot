/*CMD
  command: index.html
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>.navbar {
  margin-bottom: 80px;
  height: 70px;
} </style>
    <link
      rel="stylesheet"
      href="https://bootswatch.com/5/sandstone/bootstrap.min.css"
    />
  </head>
  <body>
    <nav class="navbar navbar-dark bg-primary">
      <div class="container">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">My Site</a>
        </div>
      </div>
    </nav>

    <div class="container">
      <div class="row">
        <div class="col-5">
          <h1 class="mb-5">Contact Us</h1>
          <form
            action="https://formsubmit.co/rizky_bb_dev@sendnow.win"
            method="POST"
          >
            <div class="mb-3">
              <label class="form-label">Full Name</label>
              <input name="name" type="text" class="form-control" required />
            </div>

            <div class="mb-3">
              <label class="form-label">Email address</label>
              <input name="email" type="email" class="form-control" required />
              <div id="emailHelp" class="form-text">
                Don't worry, we won't share it with anyone else.
              </div>
            </div>

            <div class="mb-3">
              <label class="form-label">Phone (optional)</label>
              <input name="phone" \type="tel" class="form-control" />
              <div id="phoneHelp" class="form-text">
                If you rather talk to a human directly.
              </div>
            </div>

            <div class="mb-3">
              <label class="form-label">Your Message</label>
              <textarea
                name="message"
                class="form-control"
                rows="3"
                required
              ></textarea>
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>

        <div class="col-1"></div>

        <div class="col-6 position-relative">
          <img
            src="https://raw.githubusercontent.com/codyseibert/youtube/master/contract-form-formsubmit/mail.svg"
            class="w-75 position-absolute top-50 start-50 translate-middle"
          />
        </div>
      </div>
    </div>

    
  </body>
</html>
