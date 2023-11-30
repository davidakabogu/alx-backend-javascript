import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const classRoomObject1 = new ClassRoom(19);
  const classRoomObject2 = new ClassRoom(20);
  const classRoomObject3 = new ClassRoom(34);

  return [classRoomObject1, classRoomObject2, classRoomObject3];
}
