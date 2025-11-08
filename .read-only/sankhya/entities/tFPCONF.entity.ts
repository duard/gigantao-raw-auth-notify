import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPCONFIG', ['codusu', 'confid'], { unique: true })
@Entity('TFPCONF', { schema: 'SANKHYA' })
export class TfpconfEntity {
  @Column('smallint', { primary: true, name: 'CONFID' })
  confid: number;

  @Column('text', { name: 'CONFIG', nullable: true })
  config: string | null;

  @Column('smallint', { primary: true, name: 'CODUSU' })
  codusu: number;
}
