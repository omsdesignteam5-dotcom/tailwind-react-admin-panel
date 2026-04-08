export type UserRole = 'superadmin' | 'admin' | 'Teacher' | 'Parent' | 'Student'
export type UserStatus = 'active' | 'inactive' | 'suspended'

export interface User {
  id: string
  firstName: string
  lastName: string
  username: string
  email: string
  phone: string
  role: UserRole
  status: UserStatus
}

export const mockUsers: User[] = [
  { id: 'usr_001', firstName: 'John', lastName: 'Doe', username: 'johndoe', email: 'john.doe@example.com', phone: '+1-202-555-0101', role: 'superadmin', status: 'active' },
  { id: 'usr_002', firstName: 'Jane', lastName: 'Smith', username: 'janesmith', email: 'jane.smith@example.com', phone: '+1-202-555-0102', role: 'admin', status: 'active' },
  { id: 'usr_003', firstName: 'Alice', lastName: 'Johnson', username: 'alicej', email: 'alice.johnson@example.com', phone: '+1-202-555-0103', role: 'Teacher', status: 'active' },
  { id: 'usr_004', firstName: 'Bob', lastName: 'Williams', username: 'bobw', email: 'bob.wills@example.com', phone: '+1-202-555-0104', role: 'Parent', status: 'active' },
  { id: 'usr_005', firstName: 'Charlie', lastName: 'Brown', username: 'cbrown', email: 'charlie.brown@example.com', phone: '+1-202-555-0105', role: 'Student', status: 'active' },
  { id: 'usr_006', firstName: 'Diana', lastName: 'Miller', username: 'dianam', email: 'diana.miller@example.com', phone: '+1-202-555-0106', role: 'Teacher', status: 'active' },
  { id: 'usr_007', firstName: 'Evan', lastName: 'Davis', username: 'evand', email: 'evan.davis@example.com', phone: '+1-202-555-0107', role: 'Student', status: 'inactive' },
  { id: 'usr_008', firstName: 'Fiona', lastName: 'Garcia', username: 'fionag', email: 'fiona.garcia@example.com', phone: '+1-202-555-0108', role: 'Parent', status: 'active' },
  { id: 'usr_009', firstName: 'George', lastName: 'Martinez', username: 'georgem', email: 'george.martinez@example.com', phone: '+1-202-555-0109', role: 'Teacher', status: 'active' },
  { id: 'usr_010', firstName: 'Hannah', lastName: 'Rodriguez', username: 'hannahr', email: 'hannah.rodriguez@example.com', phone: '+1-202-555-0110', role: 'Student', status: 'active' },
  { id: 'usr_011', firstName: 'Ian', lastName: 'Hernandez', username: 'ianh', email: 'ian.hernandez@example.com', phone: '+1-202-555-0111', role: 'Admin', status: 'suspended' } as any,
  { id: 'usr_012', firstName: 'Julia', lastName: 'Lopez', username: 'julial', email: 'julia.lopez@example.com', phone: '+1-202-555-0112', role: 'Parent', status: 'active' },
  { id: 'usr_013', firstName: 'Kevin', lastName: 'Gonzalez', username: 'keving', email: 'kevin.gonzalez@example.com', phone: '+1-202-555-0113', role: 'Student', status: 'active' },
  { id: 'usr_014', firstName: 'Laura', lastName: 'Wilson', username: 'lauraw', email: 'laura.wilson@example.com', phone: '+1-202-555-0114', role: 'Teacher', status: 'inactive' },
  { id: 'usr_015', firstName: 'Michael', lastName: 'Anderson', username: 'michaela', email: 'michael.anderson@example.com', phone: '+1-202-555-0115', role: 'Student', status: 'active' },
  { id: 'usr_016', firstName: 'Nina', lastName: 'Thomas', username: 'ninat', email: 'nina.thomas@example.com', phone: '+1-202-555-0116', role: 'Parent', status: 'active' },
  { id: 'usr_017', firstName: 'Oliver', lastName: 'Taylor', username: 'olivert', email: 'oliver.taylor@example.com', phone: '+1-202-555-0117', role: 'Teacher', status: 'active' },
  { id: 'usr_018', firstName: 'Paula', lastName: 'Moore', username: 'paulam', email: 'paula.moore@example.com', phone: '+1-202-555-0118', role: 'Student', status: 'active' },
  { id: 'usr_019', firstName: 'Quinn', lastName: 'Jackson', username: 'quinnj', email: 'quinn.jackson@example.com', phone: '+1-202-555-0119', role: 'Student', status: 'suspended' },
  { id: 'usr_020', firstName: 'Rachel', lastName: 'Martin', username: 'rachelm', email: 'rachel.martin@example.com', phone: '+1-202-555-0120', role: 'Parent', status: 'active' },
  { id: 'usr_021', firstName: 'Samuel', lastName: 'Lee', username: 'samuell', email: 'samuel.lee@example.com', phone: '+1-202-555-0121', role: 'Teacher', status: 'active' },
  { id: 'usr_022', firstName: 'Tina', lastName: 'Perez', username: 'tinap', email: 'tina.perez@example.com', phone: '+1-202-555-0122', role: 'Student', status: 'active' },
  { id: 'usr_023', firstName: 'Ursula', lastName: 'Thompson', username: 'ursulat', email: 'ursula.thompson@example.com', phone: '+1-202-555-0123', role: 'Student', status: 'inactive' },
  { id: 'usr_024', firstName: 'Victor', lastName: 'White', username: 'victorw', email: 'victor.white@example.com', phone: '+1-202-555-0124', role: 'Parent', status: 'active' },
  { id: 'usr_025', firstName: 'Wendy', lastName: 'Harris', username: 'wendyh', email: 'wendy.harris@example.com', phone: '+1-202-555-0125', role: 'Teacher', status: 'active' },
  { id: 'usr_026', firstName: 'Xavier', lastName: 'Sanchez', username: 'xaviers', email: 'xavier.sanchez@example.com', phone: '+1-202-555-0126', role: 'Student', status: 'suspended' },
  { id: 'usr_027', firstName: 'Yvonne', lastName: 'Clark', username: 'yvonnec', email: 'yvonne.clark@example.com', phone: '+1-202-555-0127', role: 'Student', status: 'active' },
  { id: 'usr_028', firstName: 'Zachary', lastName: 'Ramirez', username: 'zacharyr', email: 'zachary.ramirez@example.com', phone: '+1-202-555-0128', role: 'Parent', status: 'active' },
  { id: 'usr_029', firstName: 'Amelia', lastName: 'Lewis', username: 'amelial', email: 'amelia.lewis@example.com', phone: '+1-202-555-0129', role: 'Teacher', status: 'active' },
  { id: 'usr_030', firstName: 'Brian', lastName: 'Robinson', username: 'brianr', email: 'brian.robinson@example.com', phone: '+1-202-555-0130', role: 'admin', status: 'active' }
]
