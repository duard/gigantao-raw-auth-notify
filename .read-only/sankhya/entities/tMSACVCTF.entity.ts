import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TmsacvEntity } from './tMSACV.entity';

@Index('PK_TMSACVCTF', ['nuacerto', 'codctf'], { unique: true })
@Entity('TMSACVCTF', { schema: 'SANKHYA' })
export class TmsacvctfEntity {
  @Column('int', { primary: true, name: 'NUACERTO' })
  nuacerto: number;

  @Column('int', { primary: true, name: 'CODCTF' })
  codctf: number;

  @ManyToOne(() => TmsacvEntity, (tmsacvEntity) => tmsacvEntity.tmsacvctfs)
  @JoinColumn([{ name: 'NUACERTO', referencedColumnName: 'nuacerto' }])
  nuacerto2: TmsacvEntity;
}
