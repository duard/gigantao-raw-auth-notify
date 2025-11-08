import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TprplpEntity } from './tPRPLP.entity';
import { TprprcEntity } from './tPRPRC.entity';
import { TprlopEntity } from './tPRLOP.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TpritelopEntity } from './tPRITELOP.entity';
import { TprplopEntity } from './tPRPLOP.entity';
import { TprsplopEntity } from './tPRSPLOP.entity';
import { TprtlopEntity } from './tPRTLOP.entity';
import { TprwlopEntity } from './tPRWLOP.entity';

@Index('PK_TPRILOP', ['nulop', 'seqop'], { unique: true })
@Entity('TPRILOP', { schema: 'SANKHYA' })
export class TprilopEntity {
  @Column('int', { primary: true, name: 'NULOP' })
  nulop: number;

  @Column('smallint', { primary: true, name: 'SEQOP' })
  seqop: number;

  @Column('smallint', { name: 'ORDEM', default: () => '(0)' })
  ordem: number;

  @Column('varchar', { name: 'COMPARTILHA', length: 1, default: () => "'S'" })
  compartilha: string;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('smallint', { name: 'SEQNOTA', nullable: true })
  seqnota: number | null;

  @Column('datetime', { name: 'DTPREVENT', nullable: true })
  dtprevent: Date | null;

  @Column('float', {
    name: 'TEMPOATRAVESS',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  tempoatravess: number | null;

  @Column('datetime', { name: 'DTINICIOMAX', nullable: true })
  dtiniciomax: Date | null;

  @Column('smallint', { name: 'SEQCOP', nullable: true })
  seqcop: number | null;

  @ManyToOne(() => TprplpEntity, (tprplpEntity) => tprplpEntity.tprilops)
  @JoinColumn([{ name: 'CODPLP', referencedColumnName: 'codplp' }])
  codplp: TprplpEntity;

  @ManyToOne(() => TprprcEntity, (tprprcEntity) => tprprcEntity.tprilops)
  @JoinColumn([{ name: 'IDPROC', referencedColumnName: 'idproc' }])
  idproc: TprprcEntity;

  @ManyToOne(() => TprlopEntity, (tprlopEntity) => tprlopEntity.tprilops)
  @JoinColumn([{ name: 'NULOP', referencedColumnName: 'nulop' }])
  nulop2: TprlopEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tprilops)
  @JoinColumn([{ name: 'CODPARCTERC', referencedColumnName: 'codparc' }])
  codparcterc: TgfparEntity;

  @OneToMany(
    () => TpritelopEntity,
    (tpritelopEntity) => tpritelopEntity.tprilop,
  )
  tpritelops: TpritelopEntity[];

  @OneToMany(() => TprplopEntity, (tprplopEntity) => tprplopEntity.tprilop)
  tprplops: TprplopEntity[];

  @OneToMany(() => TprsplopEntity, (tprsplopEntity) => tprsplopEntity.tprilop)
  tprsplops: TprsplopEntity[];

  @OneToMany(() => TprtlopEntity, (tprtlopEntity) => tprtlopEntity.tprilop)
  tprtlops: TprtlopEntity[];

  @OneToMany(() => TprwlopEntity, (tprwlopEntity) => tprwlopEntity.tprilop)
  tprwlops: TprwlopEntity[];
}
