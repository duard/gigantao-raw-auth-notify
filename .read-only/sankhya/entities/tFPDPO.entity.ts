import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TfpdpfEntity } from './tFPDPF.entity';
import { TfpempEntity } from './tFPEMP.entity';
import { TfpcghEntity } from './tFPCGH.entity';

@Index('PK_TFPDPO', ['nudiaponte'], { unique: true })
@Index('TFPDPO_I01', ['codemp', 'dtfolga', 'dttrabalho'], { unique: true })
@Entity('TFPDPO', { schema: 'SANKHYA' })
export class TfpdpoEntity {
  @Column('int', { primary: true, name: 'NUDIAPONTE' })
  nudiaponte: number;

  @Column('smallint', { name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { name: 'DTFOLGA' })
  dtfolga: Date;

  @Column('datetime', { name: 'DTTRABALHO' })
  dttrabalho: Date;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 60 })
  observacao: string | null;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @OneToMany(() => TfpdpfEntity, (tfpdpfEntity) => tfpdpfEntity.nudiaponte2)
  tfpdpfs: TfpdpfEntity[];

  @ManyToOne(() => TfpempEntity, (tfpempEntity) => tfpempEntity.tfpdpos)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TfpempEntity;

  @ManyToOne(() => TfpcghEntity, (tfpcghEntity) => tfpcghEntity.tfpdpos)
  @JoinColumn([{ name: 'CODCARGAHOR', referencedColumnName: 'codcargahor' }])
  codcargahor: TfpcghEntity;
}
