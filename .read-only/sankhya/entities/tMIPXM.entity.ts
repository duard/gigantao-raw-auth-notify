import { Column, Entity, Index } from 'typeorm';

@Index('PK_TMIPXM', ['codpla', 'numet'], { unique: true })
@Entity('TMIPXM', { schema: 'SANKHYA' })
export class TmipxmEntity {
  @Column('int', { primary: true, name: 'CODPLA' })
  codpla: number;

  @Column('int', { primary: true, name: 'NUMET' })
  numet: number;
}
