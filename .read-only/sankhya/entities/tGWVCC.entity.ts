import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGWVCC', ['nuseparacao', 'idrev'], { unique: true })
@Entity('TGWVCC', { schema: 'SANKHYA' })
export class TgwvccEntity {
  @Column('int', { primary: true, name: 'NUSEPARACAO' })
  nuseparacao: number;

  @Column('int', { primary: true, name: 'IDREV' })
  idrev: number;

  @Column('smallint', { name: 'CODUSUCONF' })
  codusuconf: number;
}
