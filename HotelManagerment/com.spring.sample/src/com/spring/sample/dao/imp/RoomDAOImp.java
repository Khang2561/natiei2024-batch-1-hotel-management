package com.spring.sample.dao.imp;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.transaction.annotation.Transactional;

import com.spring.sample.dao.RoomDAO;
import com.spring.sample.entity.Room;
import com.spring.sample.entity.RoomType;

public class RoomDAOImp extends GenericDAOImp<Room, Integer> implements RoomDAO {

	public RoomDAOImp() {
		super(Room.class);
	}

	@Override
	public List<Room> getAllRooms() {
		String hql = "SELECT r FROM Room r LEFT JOIN FETCH r.roomType t";
		Query<Room> query = getSession().createQuery(hql, Room.class);
		return query.getResultList();
	}

	@Override
	public void deleteRoomById(String roomID) {
		String hql = "DELETE FROM Room r WHERE r.roomID = :roomID";
		Query<?> query = getSession().createQuery(hql);
		query.setParameter("roomID", roomID);
		query.executeUpdate();
	}

	@Transactional
	@Override
	public void UpdateRoom(String roomID, String nameRoom, String note, RoomType roomType) {
		// Tìm entity bằng ID
		Room room = getHibernateTemplate().get(Room.class, roomID);
		if (room == null) {
			throw new RuntimeException("Room not found");
		}
		// Cập nhật các thuộc tính
		room.setRoomName(nameRoom);
		room.setNote(note);
		room.setRoomType(roomType);
		// Lưu lại entity đã cập nhật
		getHibernateTemplate().update(room);
	}

	@Transactional
	@Override
	public void save(Room newRoom) {
		getHibernateTemplate().saveOrUpdate(newRoom);
	}

	@Override
	public boolean existsByRoomID(String roomID) {
		String hql = "SELECT COUNT(r) FROM Room r WHERE r.roomID = :roomID";
		Query<Long> query = getSession().createQuery(hql, Long.class);
		query.setParameter("roomID", roomID);
		Long count = query.getSingleResult();
		return count > 0;
	}
}
