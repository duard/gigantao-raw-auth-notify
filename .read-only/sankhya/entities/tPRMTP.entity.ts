import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TpratvEntity } from './tPRATV.entity';
import { TpriatvEntity } from './tPRIATV.entity';

@Index('PK_TPRMTP', ['codmtp'], { unique: true })
@Entity('TPRMTP', { schema: 'SANKHYA' })
export class TprmtpEntity {
  @Column('int', { primary: true, name: 'CODMTP' })
  codmtp: number;

  @Column('varchar', { name: 'DESCRICAO', length: 100 })
  descricao: string;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('char', { name: 'PLANEJADA', nullable: true, length: 1 })
  planejada: string | null;

  @Column('varchar', { name: 'MOTIVOPARADA', nullable: true, length: 2 })
  motivoparada: string | null;

  @OneToMany(() => TpratvEntity, (tpratvEntity) => tpratvEntity.codmtpfinturno)
  tpratvs: TpratvEntity[];

  @OneToMany(() => TpriatvEntity, (tpriatvEntity) => tpriatvEntity.codmtp)
  tpriatvs: TpriatvEntity[];
}
