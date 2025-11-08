import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TcatenEntity } from './tCATEN.entity';
import { TcadurEntity } from './tCADUR.entity';
import { TcamatEntity } from './tCAMAT.entity';
import { TcaserEntity } from './tCASER.entity';
import { TfpfcrEntity } from './tFPFCR.entity';

@Index('PK_TCACUR', ['codcur'], { unique: true })
@Entity('TCACUR', { schema: 'SANKHYA' })
export class TcacurEntity {
  @Column('char', { primary: true, name: 'CODCUR', length: 15 })
  codcur: string;

  @Column('char', { name: 'NOMECUR', nullable: true, length: 50 })
  nomecur: string | null;

  @Column('char', { name: 'NOMEABREVIADO', nullable: true, length: 30 })
  nomeabreviado: string | null;

  @Column('smallint', { name: 'GRAU' })
  grau: number;

  @Column('decimal', {
    name: 'PORCINC',
    nullable: true,
    precision: 15,
    scale: 4,
  })
  porcinc: number | null;

  @Column('smallint', { name: 'MODULOAULA', nullable: true })
  moduloaula: number | null;

  @ManyToOne(() => TcatenEntity, (tcatenEntity) => tcatenEntity.tcacurs)
  @JoinColumn([{ name: 'CODTPENS', referencedColumnName: 'codtpens' }])
  codtpens: TcatenEntity;

  @ManyToOne(() => TcadurEntity, (tcadurEntity) => tcadurEntity.tcacurs)
  @JoinColumn([{ name: 'CODDURA', referencedColumnName: 'coddura' }])
  coddura: TcadurEntity;

  @OneToMany(() => TcamatEntity, (tcamatEntity) => tcamatEntity.codcur)
  tcamats: TcamatEntity[];

  @OneToMany(() => TcaserEntity, (tcaserEntity) => tcaserEntity.codcur2)
  tcasers: TcaserEntity[];

  @OneToMany(() => TcaserEntity, (tcaserEntity) => tcaserEntity.codproxcur)
  tcasers2: TcaserEntity[];

  @OneToMany(() => TfpfcrEntity, (tfpfcrEntity) => tfpfcrEntity.codcur2)
  tfpfcrs: TfpfcrEntity[];
}
