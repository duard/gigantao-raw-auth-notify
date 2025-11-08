import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TfpbenEntity } from './tFPBEN.entity';
import { TfpcmvEntity } from './tFPCMV.entity';
import { TfpmovEntity } from './tFPMOV.entity';
import { TgffinEntity } from './tGFFIN.entity';

@Index('PK_TFPCBE', ['codcbe'], { unique: true })
@Entity('TFPCBE', { schema: 'SANKHYA' })
export class TfpcbeEntity {
  @Column('int', { primary: true, name: 'CODCBE' })
  codcbe: number;

  @Column('datetime', { name: 'REFERENCIA' })
  referencia: Date;

  @Column('float', { name: 'VLRNOTA', nullable: true, precision: 53 })
  vlrnota: number | null;

  @Column('float', { name: 'VLRBEN', nullable: true, precision: 53 })
  vlrben: number | null;

  @Column('float', { name: 'VLREMP', nullable: true, precision: 53 })
  vlremp: number | null;

  @Column('float', { name: 'VLRFECHAMENTO', nullable: true, precision: 53 })
  vlrfechamento: number | null;

  @Column('char', { name: 'STATUS', length: 2, default: () => "'PE'" })
  status: string;

  @Column('datetime', { name: 'DTVENC' })
  dtvenc: Date;

  @Column('int', { name: 'NUMNOTA' })
  numnota: number;

  @Column('datetime', { name: 'DTINI', nullable: true })
  dtini: Date | null;

  @Column('datetime', { name: 'DTFIM', nullable: true })
  dtfim: Date | null;

  @Column('datetime', { name: 'DTINIAPUBEN', nullable: true })
  dtiniapuben: Date | null;

  @Column('datetime', { name: 'DTFIMAPUBEN', nullable: true })
  dtfimapuben: Date | null;

  @Column('datetime', { name: 'DTINIAFASTFAL', nullable: true })
  dtiniafastfal: Date | null;

  @Column('datetime', { name: 'DTFIMAFASTFAL', nullable: true })
  dtfimafastfal: Date | null;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 255 })
  descricao: string | null;

  @ManyToOne(() => TfpbenEntity, (tfpbenEntity) => tfpbenEntity.tfpcbes)
  @JoinColumn([{ name: 'CODBEN', referencedColumnName: 'codben' }])
  codben: TfpbenEntity;

  @OneToMany(() => TfpcmvEntity, (tfpcmvEntity) => tfpcmvEntity.codcbe)
  tfpcmvs: TfpcmvEntity[];

  @OneToMany(() => TfpmovEntity, (tfpmovEntity) => tfpmovEntity.codcbe)
  tfpmovs: TfpmovEntity[];

  @OneToMany(() => TgffinEntity, (tgffinEntity) => tgffinEntity.codcbe)
  tgffins: TgffinEntity[];
}
