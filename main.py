import webapp2


class Home(webapp2.RequestHandler):
    def get(self):
        self.redirect('/static/index.html?v=1.1')

app = webapp2.WSGIApplication([
    ('/', Home)
    ], debug=False)