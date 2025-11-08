import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TGFAEP', ['codparc', 'nomearquivo'], { unique: true })
@Entity('TGFAEP', { schema: 'SANKHYA' })
export class TgfaepEntity {
  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('varchar', { primary: true, name: 'NOMEARQUIVO', length: 100 })
  nomearquivo: string;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfaeps)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;
}
