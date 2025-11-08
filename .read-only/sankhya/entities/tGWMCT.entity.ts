import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgwhctEntity } from './tGWHCT.entity';

@Index('PK_TGWMCT', ['codmotcorte'], { unique: true })
@Entity('TGWMCT', { schema: 'SANKHYA' })
export class TgwmctEntity {
  @Column('int', { primary: true, name: 'CODMOTCORTE' })
  codmotcorte: number;

  @Column('varchar', { name: 'DESCRICAO', length: 50 })
  descricao: string;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @OneToMany(() => TgwhctEntity, (tgwhctEntity) => tgwhctEntity.codmotcorte)
  tgwhcts: TgwhctEntity[];
}
