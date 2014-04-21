import webapp2
import jinja2
import os


jinja_environment = jinja2.Environment(
  loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
  extensions=['jinja2.ext.autoescape'],
  autoescape=True)

v = os.environ.get('latest_static_version')

class Home(webapp2.RequestHandler):
    def get(self):
	    template = jinja_environment.get_template('templates/index.html')
	    self.response.headers['Content-Type'] = 'text/html'
	    self.response.out.write(template.render(v=v))

app = webapp2.WSGIApplication([
    ('/', Home)
    ], debug=False)