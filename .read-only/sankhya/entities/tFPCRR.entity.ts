import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TfpcarEntity } from './tFPCAR.entity';
import { TfpcceEntity } from './tFPCCE.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfpfunEntity } from './tFPFUN.entity';
import { TfphfuEntity } from './tFPHFU.entity';
import { TgpccrEntity } from './tGPCCR.entity';

@Index('PK_TFPCRR', ['codcarreira'], { unique: true })
@Entity('TFPCRR', { schema: 'SANKHYA' })
export class TfpcrrEntity {
  @Column('int', { primary: true, name: 'CODCARREIRA' })
  codcarreira: number;

  @Column('varchar', { name: 'DESCRCARREIRA', length: 60 })
  descrcarreira: string;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('varchar', { name: 'LEICARR', nullable: true, length: 12 })
  leicarr: string | null;

  @Column('datetime', { name: 'DTLEICARR', nullable: true })
  dtleicarr: Date | null;

  @Column('char', { name: 'SITCARR', nullable: true, length: 1 })
  sitcarr: string | null;

  @Column('char', { name: 'USADOESOCIAL', length: 1, default: () => "'N'" })
  usadoesocial: string;

  @OneToMany(() => TfpcarEntity, (tfpcarEntity) => tfpcarEntity.codcarreira)
  tfpcars: TfpcarEntity[];

  @OneToMany(() => TfpcceEntity, (tfpcceEntity) => tfpcceEntity.codcarreira2)
  tfpcces: TfpcceEntity[];

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpcrrs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.codcarreira)
  tfpfuns: TfpfunEntity[];

  @OneToMany(() => TfphfuEntity, (tfphfuEntity) => tfphfuEntity.codcarreira)
  tfphfus: TfphfuEntity[];

  @OneToMany(() => TgpccrEntity, (tgpccrEntity) => tgpccrEntity.codcarreira2)
  tgpccrs: TgpccrEntity[];
}
