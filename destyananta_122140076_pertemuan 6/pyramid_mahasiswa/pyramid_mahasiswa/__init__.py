from pyramid.config import Configurator


def main(global_config, **settings):
    """This function returns a Pyramid WSGI application."""
    with Configurator(settings=settings) as config:
        config.include('pyramid_jinja2')
        config.include('.models')
        config.include('.routes')
        config.include('pyramid_debugtoolbar')
        config.include('pyramid_tm')  # <-- Tambahkan baris ini
        return config.make_wsgi_app()
