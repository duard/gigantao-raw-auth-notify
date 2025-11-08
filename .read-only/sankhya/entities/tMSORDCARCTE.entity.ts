import { Column, Entity, Index } from 'typeorm';

@Index('PK_TMSORDCARCTE', ['nuordem', 'nunota'], { unique: true })
@Entity('TMSORDCARCTE', { schema: 'SANKHYA' })
export class TmsordcarcteEntity {
  @Column('int', { primary: true, name: 'NUORDEM' })
  nuordem: number;

  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;
}
