import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgvavalEntity } from './tGVAVAL.entity';

@Index('PK_TGVNGA', ['codnog', 'codaval'], { unique: true })
@Entity('TGVNGA', { schema: 'SANKHYA' })
export class TgvngaEntity {
  @Column('int', { primary: true, name: 'CODNOG' })
  codnog: number;

  @Column('int', { primary: true, name: 'CODAVAL' })
  codaval: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('float', { name: 'PESO', precision: 53, default: () => '(0)' })
  peso: number;

  @Column('varchar', { name: 'CRITERIO', length: 1, default: () => "'E'" })
  criterio: string;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgvngas)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgvavalEntity, (tgvavalEntity) => tgvavalEntity.tgvngas)
  @JoinColumn([{ name: 'CODAVAL', referencedColumnName: 'codaval' }])
  codaval2: TgvavalEntity;
}
