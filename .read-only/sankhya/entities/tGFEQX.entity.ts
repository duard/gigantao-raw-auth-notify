import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFEQX', ['cgcCpf', 'dhconsulta', 'tipconsulta'], { unique: true })
@Entity('TGFEQX', { schema: 'SANKHYA' })
export class TgfeqxEntity {
  @Column('varchar', { primary: true, name: 'CGC_CPF', length: 14 })
  cgcCpf: string;

  @Column('datetime', { primary: true, name: 'DHCONSULTA' })
  dhconsulta: Date;

  @Column('varchar', { primary: true, name: 'TIPCONSULTA', length: 2 })
  tipconsulta: string;

  @Column('text', { name: 'RESPOSTA', nullable: true })
  resposta: string | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('varchar', { name: 'CMC7', nullable: true, length: 30 })
  cmc7: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfeqxes)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
