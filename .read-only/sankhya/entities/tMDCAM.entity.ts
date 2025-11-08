import { Column, Entity, Index, ManyToMany } from 'typeorm';
import { TmdvarEntity } from './tMDVAR.entity';

@Index('PK_TMDCAM', ['codcam'], { unique: true })
@Entity('TMDCAM', { schema: 'SANKHYA' })
export class TmdcamEntity {
  @Column('int', { primary: true, name: 'CODCAM' })
  codcam: number;

  @Column('char', { name: 'NOMECAM', length: 32 })
  nomecam: string;

  @Column('char', { name: 'DESCCAM', length: 255 })
  desccam: string;

  @Column('char', { name: 'TIPOCAM', length: 1 })
  tipocam: string;

  @Column('smallint', { name: 'TAMANHO', nullable: true })
  tamanho: number | null;

  @ManyToMany(() => TmdvarEntity, (tmdvarEntity) => tmdvarEntity.tmdcams)
  tmdvars: TmdvarEntity[];
}
