import { Column, Entity, Index, JoinColumn, OneToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TCSSAG', ['codusu'], { unique: true })
@Entity('TCSSAG', { schema: 'SANKHYA' })
export class TcssagEntity {
  @Column('smallint', { primary: true, name: 'CODUSU' })
  codusu: number;

  @Column('varchar', { name: 'SINCAGENDA', nullable: true, length: 1 })
  sincagenda: string | null;

  @Column('varchar', { name: 'CONTASINCAGENDA', nullable: true, length: 200 })
  contasincagenda: string | null;

  @Column('varchar', { name: 'SENHASINCAGENDA', nullable: true, length: 50 })
  senhasincagenda: string | null;

  @Column('datetime', { name: 'DHULTSINCAGENDA', nullable: true })
  dhultsincagenda: Date | null;

  @Column('varchar', { name: 'IDSINCAGENDA', nullable: true, length: 200 })
  idsincagenda: string | null;

  @Column('text', { name: 'TOKEN', nullable: true })
  token: string | null;

  @Column('varchar', { name: 'REFRESHTOKEN', nullable: true, length: 1000 })
  refreshtoken: string | null;

  @Column('varchar', { name: 'AUTHCODE', nullable: true, length: 1000 })
  authcode: string | null;

  @Column('varchar', { name: 'EMAILENVIADO', nullable: true, length: 1 })
  emailenviado: string | null;

  @Column('varchar', { name: 'EMAIL', nullable: true, length: 80 })
  email: string | null;

  @Column('int', { name: 'EXPIREIN', nullable: true })
  expirein: number | null;

  @Column('datetime', { name: 'DHTOKEN', nullable: true })
  dhtoken: Date | null;

  @Column('varchar', { name: 'SINCSTATUS', nullable: true, length: 2 })
  sincstatus: string | null;

  @OneToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcssag)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu2: TsiusuEntity;
}
