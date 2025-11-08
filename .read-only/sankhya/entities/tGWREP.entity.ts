import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgwendEntity } from './tGWEND.entity';

@Index('PK_TGWREP', ['codendrecep', 'codendcede'], { unique: true })
@Entity('TGWREP', { schema: 'SANKHYA' })
export class TgwrepEntity {
  @Column('int', { primary: true, name: 'CODENDRECEP' })
  codendrecep: number;

  @Column('int', { primary: true, name: 'CODENDCEDE' })
  codendcede: number;

  @ManyToOne(() => TgwendEntity, (tgwendEntity) => tgwendEntity.tgwreps)
  @JoinColumn([{ name: 'CODENDCEDE', referencedColumnName: 'codend' }])
  codendcede2: TgwendEntity;

  @ManyToOne(() => TgwendEntity, (tgwendEntity) => tgwendEntity.tgwreps2)
  @JoinColumn([{ name: 'CODENDRECEP', referencedColumnName: 'codend' }])
  codendrecep2: TgwendEntity;
}
