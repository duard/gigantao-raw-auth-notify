import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToMany,
} from 'typeorm';
import { TsidrfEntity } from './tSIDRF.entity';
import { TsirfeEntity } from './tSIRFE.entity';
import { TsismtpEntity } from './tSISMTP.entity';

@Index('PK_TSIARF', ['nurfe', 'sequencia'], { unique: true })
@Entity('TSIARF', { schema: 'SANKHYA' })
export class TsiarfEntity {
  @Column('smallint', { primary: true, name: 'NURFE' })
  nurfe: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('datetime', { name: 'DHINI', nullable: true })
  dhini: Date | null;

  @Column('datetime', { name: 'DHFIM', nullable: true })
  dhfim: Date | null;

  @Column('varchar', { name: 'AGENDAMENTO', nullable: true, length: 3103 })
  agendamento: string | null;

  @Column('datetime', { name: 'PROXEXEC', nullable: true })
  proxexec: Date | null;

  @Column('char', { name: 'EXECUNICA', length: 1, default: () => "'N'" })
  execunica: string;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 64 })
  descricao: string | null;

  @Column('varchar', { name: 'ARQMODEMAIL', nullable: true, length: 100 })
  arqmodemail: string | null;

  @Column('smallint', { name: 'CODUSURESP', nullable: true })
  codusuresp: number | null;

  @Column('text', { name: 'EMAILMANUAL', nullable: true })
  emailmanual: string | null;

  @ManyToOne(() => TsirfeEntity, (tsirfeEntity) => tsirfeEntity.tsiarves)
  @JoinColumn([{ name: 'NURFE', referencedColumnName: 'nurfe' }])
  nurfe2: TsirfeEntity;

  @ManyToOne(() => TsismtpEntity, (tsismtpEntity) => tsismtpEntity.tsiarves)
  @JoinColumn([{ name: 'CODSMTP', referencedColumnName: 'codsmtp' }])
  codsmtp: TsismtpEntity;

  @OneToMany(() => TsidrfEntity, (tsidrfEntity) => tsidrfEntity.tsiarf)
  tsidrfs: TsidrfEntity[];
}
