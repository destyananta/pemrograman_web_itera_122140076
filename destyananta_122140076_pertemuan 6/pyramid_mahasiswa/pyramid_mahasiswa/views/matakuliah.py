from pyramid.view import view_config
from pyramid.httpexceptions import HTTPFound, HTTPNotFound, HTTPBadRequest
from ..models import Matakuliah

@view_config(route_name='matakuliah_list', renderer='json')
def matakuliah_list(request):
    dbsession = request.dbsession
    matakuliahs = dbsession.query(Matakuliah).all()
    return {'matakuliahs': [mk.to_dict() for mk in matakuliahs]}

@view_config(route_name='matakuliah_detail', renderer='json')
def matakuliah_detail(request):
    dbsession = request.dbsession
    mk_id = request.matchdict['id']
    matakuliah = dbsession.query(Matakuliah).get(mk_id)
    if not matakuliah:
        return HTTPNotFound(json_body={'error': 'Matakuliah tidak ditemukan'})
    return {'matakuliah': matakuliah.to_dict()}

@view_config(route_name='matakuliah_add', request_method='POST', renderer='json')
def matakuliah_add(request):
    try:
        data = request.json_body
        required_fields = ['kode_mk', 'nama_mk', 'sks', 'semester']
        for field in required_fields:
            if field not in data:
                return HTTPBadRequest(json_body={'error': f'{field} harus diisi'})
        new_mk = Matakuliah(**data)
        request.dbsession.add(new_mk)
        return {'success': True, 'matakuliah': new_mk.to_dict()}
    except Exception as e:
        return HTTPBadRequest(json_body={'error': str(e)})

@view_config(route_name='matakuliah_update', request_method='PUT', renderer='json')
def matakuliah_update(request):
    dbsession = request.dbsession
    mk_id = request.matchdict['id']
    matakuliah = dbsession.query(Matakuliah).get(mk_id)
    if not matakuliah:
        return HTTPNotFound(json_body={'error': 'Matakuliah tidak ditemukan'})
    try:
        data = request.json_body
        for key in ['kode_mk', 'nama_mk', 'sks', 'semester']:
            if key in data:
                setattr(matakuliah, key, data[key])
        return {'success': True, 'matakuliah': matakuliah.to_dict()}
    except Exception as e:
        return HTTPBadRequest(json_body={'error': str(e)})

@view_config(route_name='matakuliah_delete', request_method='DELETE', renderer='json')
def matakuliah_delete(request):
    dbsession = request.dbsession
    mk_id = request.matchdict['id']
    matakuliah = dbsession.query(Matakuliah).get(mk_id)
    if not matakuliah:
        return HTTPNotFound(json_body={'error': 'Matakuliah tidak ditemukan'})
    dbsession.delete(matakuliah)
    return {'success': True, 'message': f'Matakuliah {mk_id} berhasil dihapus'}