import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsigruEntity } from './tSIGRU.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TSIFSN', ['codpath'], { unique: true })
@Entity('TSIFSN', { schema: 'SANKHYA' })
export class TsifsnEntity {
  @Column('smallint', { primary: true, name: 'CODPATH' })
  codpath: number;

  @Column('varchar', { name: 'PATH', nullable: true, length: 512 })
  path: string | null;

  @Column('smallint', { name: 'ACESSO', nullable: true })
  acesso: number | null;

  @ManyToOne(() => TsigruEntity, (tsigruEntity) => tsigruEntity.tsifsns)
  @JoinColumn([{ name: 'CODGRU', referencedColumnName: 'codgrupo' }])
  codgru: TsigruEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsifsns)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
